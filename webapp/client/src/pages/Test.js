import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';

const Test = () => {
  const { register, handleSubmit } = useForm();
  const [password, setPassword] = useState(null);
  const [text, setText] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    console.log('Password entered')
    if (password != null) {
      (async () => {
        try {
          const response = await axios.post('/api/profile/cover-letter', {
            password: password
          })
          console.log(response.data.text)
          setText(response.data.text)
          setError(null)
        } catch (error) {
          console.log(error.response.data.message)
          setError(error.response.data.message)
        }
      })()
    }
  }, [password])

  const onSubmit = (data) => {
    setPassword(data.password)
  }

  const showPassword = () => {
    if (text === null) {
      return (
        <form onSubmit={e => e.preventDefault()}>
          <input {...register("password")} placeholder="Password" type="password" />
          <input type="submit" onClick={handleSubmit(onSubmit)} />
        </form>
      )
    } else {
      return null
    }
  }

  return (
    <div className='container container-side'>
      {showPassword()}
      {error != null ? <div><p>{error}</p></div> : null}
      {text != null ? <div><p>{text}</p></div> : null}
    </div>
  )
}

export default Test