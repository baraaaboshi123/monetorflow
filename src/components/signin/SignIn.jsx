import React from 'react'
import './signin.css'
import SignImg from '../../assets/images/signup-img.jpg'
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
export default function SingIn() {
  return (
    <div className='mt-5'>
<div className="row">
	<div className="col-md-6">
<img src={SignImg} alt="this is sigup image"  className='signupImg'/>
	</div>
	<div className="col-md-6">
<div className="head">
	<h2>Create your account</h2>
	<h5 className='mt-3'>it's free to start learning</h5>
</div>
<form action="" className='signupForm mt-5'>
	<h6 className='mt-1'>Username</h6>
<Input variant='flushed' placeholder='Enter your username'  className='mt-1' />

<h6 className='mt-1'>Email</h6>
<Input variant='flushed' placeholder='Enter your email' className='mt-1' />

<h6 className='mt-1'>Create a password</h6>
<Input variant='flushed' placeholder='Enter your password' className='mt-1' />
<Button type='submit' className='w-100 mt-3' colorScheme='twitter'>Sign Up</Button>
<p className='mt-3 fs-6'>By clicking on the sign up button you agree to our Terms and Conditions of Use.</p>

</form>
	</div>
</div>
    </div>
  )
}
