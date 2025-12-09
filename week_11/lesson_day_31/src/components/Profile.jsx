
function Profile({img,name,age,gender,email}){
    return(
      <div className='bg-violet-100 w-[400px] p-[50px] border-4 border-violet-400 m-auto mt-5'>
        <img src={img} width={300} alt="profile picture" />
        <p>Name:{name}</p>
        <p>Age:{age}</p>
        <p>Gender:{gender}</p>
        <i>Email:{email}</i>
      </div>
    )
  }
export default Profile
