import React, {useState } from 'react';
import axios from 'axios';
import BackButton from '../components/BackButton';
import Spinner from '../components/spinner';
import { useNavigate ,useParams } from 'react-router-dom';
const DeleteBook = () => {
  const [loading,setLoading] = useState(false);
  const navigate =useNavigate();
  const{id} = useParams();
  const handleDeleteBook =()=>{
    setLoading(true);
    axios
      .delete(`https://book-store-mern-dusky.vercel.app/books/${id}`)
      .then(()=>{
        setLoading(false);
        navigate('/');

      })
      .catch((error)=>{
        setLoading(false);
        alert('error occured check conssole');
        console.log(error);
      })
  }


  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Delet Book</h1>
      {loading ? (<spinner/>):('')}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are you sure wants to delete this BOOK?</h3>
        <button
          className='p-4 bg-red-600 text-white m-8 -w-full'
          onClick={handleDeleteBook}
          >Yes Delete it</button>
      
      </div>

    </div>
  )
}

export default DeleteBook
