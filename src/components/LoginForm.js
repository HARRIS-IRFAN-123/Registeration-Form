import ReCAPTCHA from 'react-google-recaptcha'
const LoginForm = ({
    handleSubmit,
    email,
    setEmail,
    password,
    setPassword,
  }) => {
    
    const onChange = (value) => {
      console.log("Captcha value:", value);
      // handle captcha value here
    }
  
    return (
      <form onSubmit={handleSubmit} className="mt-3">
        <div className='form-group mb-3'>
          <label className='form-label'>Your email</label>
          <input className='form-control' type='text' placeholder='Enter Email' value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className='form-group mb-3'>
        <label className='form-label'>Your password</label>
        <input className='form-control' type='password' placeholder='Enter Password' value={password} onChange={e => setPassword(e.target.value)}/>
        </div>
        {/* Add the reCAPTCHA component here */}
        <ReCAPTCHA
            sitekey="6LdIcCInAAAAACZtdMCkS0DROUoSvjoSzM82HjOF"
            onChange={onChange}
        />
  
        <button type='submit' className='btn btn-success' disabled ={!email || !password}>Submit</button>
      </form>
    )
  }
  export default LoginForm;