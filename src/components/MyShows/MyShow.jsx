import React from "react";
import "./myshow.css";
import { useDispatch, useSelector } from "react-redux";
import {  useState ,useEffect} from "react";
import showsAction from "../../redux/actions/showsAction";
import Swal from "sweetalert2";
import alertActions from '../../redux/actions/alertaHotel'

import ModalHotel from "../../components/ModalHotel/ModalHotel";
function MyShow(props) {

  const [idEdit, setIdEdit] = useState()
  console.log(idEdit);
  let {id}= props
console.log(id);
  let {alerta}=alertActions
  const [isOpen, setIsOpen] = useState(false);


  //variable que contiene el id de la card que queremos editar


  //desestructuro las acciones que necesito
  let { getShowsByUserId, deleteShow,editShow } = showsAction;
  const dispatch = useDispatch();

  //requiero hotelUser (array que se va a llenar con los id que coincidan con lo que ingrese el usuario)
  const { showsUser } = useSelector((state) => state.shows);
  console.log(showsUser);
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [price, setPrice] = useState('');
  const [hotelId, setHotelId] = useState('');
  const [description, setDescription] = useState('');
 
     
      async function getUsers(){
  
        await  dispatch(getShowsByUserId({ userId: id }));
      }
      
      
      useEffect( ()=>{
      
        getUsers()
      },[])


  //funcion que recibe un id para mandarle a la accion de eliminar un hotel
  const handleDelete = (idDelete) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your city has been deleted.", "success");
        console.log(id);

        dispatch(deleteShow({ id: idDelete }));
        dispatch(getShowsByUserId({ userId: id }));
      }
      dispatch(getShowsByUserId({ userId: id }));
    });
    dispatch(getShowsByUserId({ userId: id }));
  };

  //funcion para editar un hotel, envia el id y la data (objeto con lo que ingreso el usuario)
  //hacia la accion
  let listenEdit = async (event) => {
    event.preventDefault()

    let data = {name,photo,price,description}
console.log(data);

if (name === '' || photo === '' || photo === null || description === '' || price === ''  ) {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'You must complete all fields !',
  })
} else {
    try {
      let res = await dispatch(editShow({idEdit, data}))

      if (res.payload.success){
        Swal.fire({
          title: `${name} show has been updated`,
          imageUrl: photo,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'image',
        })
        setIsOpen(false)
        dispatch(getShowsByUserId({userId:id}))
      } 
      
      else {
        
      
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: res.payload.response,
          })
      }

    } catch(error) {
      console.log(error.message)
    }
  }}
  console.log(id);

/*   const editHotel = (e) =>{
   
console.log(e);

  } */

  return (
    <>
      <div className="BannerMyHotels">
        <h1 className="titulari">
          Find shows by <span className="upspann">ID</span>
        </h1>

        <div
          className="d-flex gap-3 justify-content-center flex-wrap checks"
          id="checkbox-container"
        ></div>
      </div>
      {/* searchbar */}
   

         {/*  CARDS */}
      <div className="containerCardsHotel">
        {showsUser.length == 0 ? (
          <div className="errorMyHotel">
            <h2>You dont have shows</h2>
          </div>
        ) : (
            showsUser.map((x) => {
            return (
              <div className="cardsIndividual">
                <img className="imgCardHotel" src={x.photo} alt="" />
                <h3 className="titleHotel">{x.name}</h3>
                <p className="descriptionHotel">
                  This hotel has a capacity of{" "}
                  <span className="Capacity">{x.capacity}</span>
                </p>
                <div className="buttonContainer">
                  <button
                    className="deleteButton"
                    onClick={() => handleDelete(x._id)}
                  >
                    DELETE HOTEL
                  </button>
                  <button
                    className="editButton"
                    onClick={() => (setIdEdit(x._id),(setIsOpen(true)))}
                  >
                    EDIT HOTEL
                  </button>
                </div>
              </div>
            );
          })
        )}

                      {/* MODAL */}
        <ModalHotel  open={isOpen} onClose={() => setIsOpen(false)}>
          <div className="edit-form-container">
            <input
              htmlFor="name"
              className="new-input"
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              htmlFor="photo"
              type="text"
              className="new-input"
              name="photo"
              placeholder="Photo"
              onChange={(e) => setPhoto(e.target.value)}
            />
            <input
              htmlFor="price"
              type="number"
              min="0"
              className="new-input"
              name="Price"
              placeholder="Price"
              onChange={(e) => setPrice(Number(e.target.value))}
            />
                <input
              htmlFor="description"
              type="text"
              className="new-input"
              name="description"
              placeholder="description"
              onChange={(e) => setDescription(e.target.value)}
            />
         
        
            <div className="edit-button">
              <button onClick={listenEdit}  type="submit">Edit</button>
            </div>
          </div>
        </ModalHotel>
      </div>
    </>
  );
}

export default MyShow;
