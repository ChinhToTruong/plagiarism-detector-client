import { Container, TextField } from '@mui/material'
import { useForm, SubmitHandler} from 'react-hook-form';
import { useState } from 'react';

interface IFormInput {
  text: string;
}

const Report = () => {

  const [idReport, setIdReport] = useState("")  
  const [score, setScore] = useState("")

  const { register, handleSubmit } = useForm<IFormInput>();
  
  const onSubmit: SubmitHandler<IFormInput> = async(data) =>{
    console.log(data);
    // const result = await submitAiScore(data)
    // const id = result?.data?.data?.id
    setIdReport(idReport);

    console.log(idReport);
  };


  return (
      <Container maxWidth={'xl'} className='min-h-full h-auto shadow-xl rounded-md'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col p-8'>
          <label className='font-black mb-8 text-3xl text-center' htmlFor="text">WeCheck</label>
          <TextField
            className='mb-4'
            id='filled-multiline-static'
            // label='Nhap van ban can kiem tra...'
            placeholder='Nhap van ban can kiem tra...'
            multiline
            rows={6}
            variant='filled'
            {...register("text")}
          />
          <div className='flex justify-between mt-4'>
            <button type='submit' className='bg-blue-500 w-fit px-16 py-4 rounded-md'>
              Kiem tra
            </button>
          </div>
        </form>
        {
        (score) ? 
          <Container>
            <h1>Score: {score}</h1>
          </Container>
        :
        <Container/>
      }
      </Container>
    
  )
}

export default Report