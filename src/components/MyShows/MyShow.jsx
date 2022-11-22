import React from "react";
import "./myshow.css";
import { useDispatch, useSelector } from "react-redux";
import {  useState } from "react";
import showsAction from "../../redux/actions/showsAction";
import Swal from "sweetalert2";
import alertActions from '../../redux/actions/alertaHotel'

import ModalHotel from "../../components/ModalHotel/ModalHotel";
function MyShow() {
  let {alerta}=alertActions
  const [isOpen, setIsOpen] = useState(false);
  let [userIdSearch, setUserId] = useState("");

  //variable que contiene el id de la card que queremos editar
  let [id, setId] = useState("");

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
  function listen() {
    if (userIdSearch.length !== 24) {
        console.log(userIdSearch);
      Swal.fire({
        title: "Error",
        text: "The id that you send is wrong, try again.",
      });
    } else {
      dispatch(getShowsByUserId({ userId: userIdSearch }));
    }
  }


  //funcion que recibe un id para mandarle a la accion de eliminar un hotel
  const handleDelete = (id) => {
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

        dispatch(deleteShow({ id: id }));
        dispatch(getShowsByUserId({ userId: userIdSearch }));
      }
    });
  };

  //funcion para editar un hotel, envia el id y la data (objeto con lo que ingreso el usuario)
  //hacia la accion
  let listenEdit = async (event) => {
    event.preventDefault()

    let data = {name,photo,hotelId,price,description}
console.log(data);
    try {
      let res = await dispatch(editShow({id, data}))

      if (res.payload.success){
        Swal.fire({
          title: `${name} show has been updated`,
          imageUrl: photo,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'image',
        })
        dispatch(getShowsByUserId({userId:userIdSearch}))
      } else {
        dispatch(alerta(
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
  }
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
      <main className="maino">
        <div className="search-bar">
          <input
            className="inputMyhotel"
            onChange={(e) => setUserId(e.target.value)}
            type="text"
            placeholder="Search by your ID"
          />
          <button className="sendMyHotel" onClick={listen}>
            Send
          </button>
        </div>
      </main>

         {/*  CARDS */}
      <div className="containerCardsHotel">
        {showsUser.length == 0 ? (
          <div className="errorMyHotel">
            <h2>Please search a valid ID</h2>
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
                    onClick={() => (setId(x._id),(setIsOpen(true)))}
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
            <input
              htmlFor="Hotel ID"
              type="text"
              className="new-input"
              name="Hotel ID"
              placeholder="Hotel ID"
              onChange={(e) => setHotelId(e.target.value)}
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
