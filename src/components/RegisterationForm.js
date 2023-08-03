import './RegisterationForm.css'
import ReCAPTCHA from 'react-google-recaptcha'

const RegisterationForm = ({
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  address,
  setAddress,
  smaster,
  setSmaster,
  program,
  setProgram,
  course,
  setCourse,
  phonenumber,
  setPhoneNumber,
  college,
  setCollege,
  university,
  setUniversity
}) => {
  
  const onChange = (value) => {
    console.log("Captcha value:", value);
    // handle captcha value here
  }

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <div className='form-group mb-3'>
        <label className='form-label'>Your name</label>
        <input className='form-control' type='text' placeholder='Enter Name' value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div className='form-group mb-3'>
        <label className='form-label'>Your email</label>
        <input className='form-control' type='text' placeholder='Enter Email' value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div className='form-group mb-3'>
      <label className='form-label'>Your password</label>
      <input className='form-control' type='password' placeholder='Enter Password' value={password} onChange={e => setPassword(e.target.value)}/>
      </div>
      <div className='form-group mb-3'>
        <label className="form-label">Your address</label>
        <input className='form-control' type='text' placeholder='Enter Address' value={address} onChange={e => setAddress(e.target.value)} />
      </div>
      <div className='form-group mb-3'>
        <label className='form-label'>Your program</label>
        <input className='form-control' type='text' placeholder='Enter Program' value={program} onChange={e => setProgram(e.target.value)} />
      </div>
      <div className='form-group mb-3 course'>
        <label className='form-label'>Your course</label>
        <input className='form-control' type='text' placeholder='Enter Course' value={course} onChange={e => setCourse(e.target.value)} />
        <div className="dropdown-2">
          <span className="dropdown-icon-2">....</span>
          <div className="dropdown-content-2">
            <div className="dropdown-content-2">
              <a href="#" onClick={e => setCourse(e.target.textContent)}>Full-Stack-Development</a>
              <a href="#" onClick={e => setCourse(e.target.textContent)}>Mern-Stack-Development</a>
              <a href="#" onClick={e => setCourse(e.target.textContent)}>Graphic-Designing</a>
            </div>

          </div>
        </div>
      </div>

      <div className='form-group mb-3'>
        <label className='form-label'>Your semester</label>
        <input className='form-control' type='text' placeholder='Enter Smester' value={smaster} onChange={e => setSmaster(e.target.value)} />
      </div>
      <div className='form-group mb-3'>
        <label className='form-label'>Your phone number</label>
        <input className='form-control' type='text' placeholder='Enter Phone Number' value={phonenumber} onChange={e => setPhoneNumber(e.target.value)} />
      </div>
      <div className='form-group mb-3'>
        <label className='form-label'>Your college</label>
        <input className='form-control' type='text' placeholder='Enter College' value={college} onChange={e => setCollege(e.target.value)} />
      </div>
      <div className='form-group mb-3'>
        <label className='form-label'>Your university</label>
        <input className='form-control' type='text' placeholder='Enter University' value={university} onChange={e => setUniversity(e.target.value)} />
      </div>

      {/* Add the reCAPTCHA component here */}
      <ReCAPTCHA
          sitekey="6LdIcCInAAAAACZtdMCkS0DROUoSvjoSzM82HjOF"
          onChange={onChange}
      />

      <button type='submit' className='btn btn-warning'>Submit</button>
    </form>
  )
}

export default RegisterationForm
