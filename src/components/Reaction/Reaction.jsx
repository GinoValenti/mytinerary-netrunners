import React, {useEffect} from 'react'
import './reaction.css'
import { useDispatch, useSelector } from 'react-redux'
import reactionActions from '../../redux/actions/reactionAction'
import { useState } from 'react'

function Reaction(props) {
    
    let { id , token, logged } = useSelector(store=>store.usuario)
    
    const [reload, setReload] = useState(true)


    let { feedbackReaction, getReactionItinerary } = reactionActions

    let { idItinerary } = props

    let dispatch = useDispatch()

    useEffect(() => {
        updateReaction()
    }, [reload])

    async function updateReaction() {
        await dispatch(getReactionItinerary({itineraryId : idItinerary, token: token}))
    }

    let { reactions } = useSelector(store=>store.reaction)


    

    async function giveReaction(e) {


        let name = e.target.alt

        try {
            let res = await dispatch(feedbackReaction({token: token, name: name, itineraryId: idItinerary}))

            setReload(!reload)
        } catch (error) {
            console.log(error)
        }

    }

  return (
    <>
    <div className='itinerary-reaction-container'>
        {
        !logged ? 
        <></>
        : 
        reactions.map(x=>{
            let user = x.userId.find(user => user === id)
            let quantity = x.userId.length

            return (
                <div>
                    <div key={x.name}>
                        {
                            user ? (
                                <div className='double-reaction-container'>
                                    <div >
                                        <img onClick={giveReaction} name={x.name} className='reaction-image' src={x.icon} alt={x.name} />
                                        <p>{quantity}</p>
                                    </div>
                                </div>
                            ) : (
                                <div className='double-reaction-container'>
                                    <div  >
                                        <img onClick={giveReaction} name={x.name} className='reaction-image' src={x.iconBack} alt={x.name} />
                                        <p>{quantity}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            )
        } )
      }
      </div>
    </>
  )
}

export default Reaction