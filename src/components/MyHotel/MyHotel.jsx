import React from "react";
import "./myhotel.css";
import { useDispatch, useSelector } from "react-redux";
import {  useState } from "react";
import hotelsAction from "../../redux/actions/hotelsAction";
import Swal from "sweetalert2";
import alertActions from '../../redux/actions/alertaHotel'

import ModalHotel from "../../components/ModalHotel/ModalHotel";
import { useEffect } from "react";
function MyHotel(props) {
  const [idEdit, setIdEdit] = useState()
  console.log(idEdit);
  let {alerta}=alertActions
  let { token} = useSelector(store => store.usuario)
  const [isOpen, setIsOpen] = useState(false);
  let {id}= props
  console.log(id);

  let { getHotelsByUserId, deleteHotel,editHotel } = hotelsAction;
  const dispatch = useDispatch();

  //requiero hotelUser (array que se va a llenar con los id que coincidan con lo que ingrese el usuario)
  const { hotelsUser } = useSelector((state) => state.hotels);
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [capacity, setCapacity] = useState('');
  const [citiId, setCitiId] = useState('');

async function getHotels(){

  await dispatch(getHotelsByUserId({ userId: id }));
}
   useEffect(()=>{
    getHotels()
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

        dispatch(deleteHotel({ id: idDelete ,token:token}));
        dispatch(getHotelsByUserId({ userId: id }));
      }
      dispatch(getHotelsByUserId({ userId: id }));
    });
    dispatch(getHotelsByUserId({ userId: id }));
  };

  //funcion para editar un hotel, envia el id y la data (objeto con lo que ingreso el usuario)
  //hacia la accion
  let listenEdit = async (event) => {
    event.preventDefault()

    let data = {name,capacity,photo,citiId}
console.log(data);

if (name === '' || photo === '' || photo === null || capacity === ''  ) {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'You must complete all fields !',
  })
} else {
    try {
      let res = await dispatch(editHotel({idEdit, data,token}))

      if (res.payload.success){
        Swal.fire({
          title: `${name} city has been updated`,
          imageUrl: photo,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'image',
        })
      setIsOpen(false)
      dispatch(getHotelsByUserId({userId:id}))
      } else {
        dispatch((
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: res.payload.response,
/*             text: res.payload.response2  */
          })))
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
          Find hotels by <span className="upspann">ID</span>
        </h1>

        <div
          className="d-flex gap-3 justify-content-center flex-wrap checks"
          id="checkbox-container"
        ></div>
      </div>
   
      

         {/*  CARDS */}
      <div className="containerCardsHotel">
        {hotelsUser.length == 0 ? (
          <div className="errorMyHotel">
            <h2>You dont have hotels</h2>
          </div>
        ) : (
          hotelsUser.map((x) => {
            return (
              <div className="cardsIndividual">
                <img className="imgCardHotel" src={x.photo[0]} alt="" />
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
              htmlFor="capacity"
              type="number"
              min="0"
              className="new-input"
              name="capacity"
              placeholder="Capacity"
              onChange={(e) => setCapacity(Number(e.target.value))}
            />
            <input
              htmlFor="citiId"
              type="text"
              className="new-input"
              name="city id"
              placeholder="City ID"
              onChange={(e) => setCitiId(e.target.value)}
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

export default MyHotel;
