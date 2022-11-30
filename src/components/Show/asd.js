




<div className='inputi-container' onSubmit={Submit} ref={form}>
        
<input onChange={(e) => setComment(e.target.value)} className='comment-imput' placeholder='Leave your comment...'>

</input>      
    <button onClick={Submit} className='sendingg'>send</button>
</div>