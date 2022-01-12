# recaptcha-v3-react-function-async

This component is created in order to make the experience of integrating Google ReCaptcha into React apps easier and smoother.

# YouTub instruction
https://youtu.be/yyR6wZGl-IM

# Google ReCaptcha V3

## Installation

`npm install recaptcha-v3-react-function-async --save`

## Usage

First of all, get your site key for ReCaptcha V3 [here](https://www.google.com/recaptcha/admin#v3signup "V3 signup")

There are two steps that you need to implement.

### 1. Use `loadReCaptcha()` to initialize the ReCaptcha

This function should be imported and called in the main (parent) component of your app. We recommend calling it in `useEffect()` or `componentDidMount()` of `App.js`.

FOR REACT FUNCTION
``` 
import { loadReCaptcha } from 'recaptcha-v3-react-function-async'

... 
useEffect (()=>{
    loadReCaptcha(
        'your_site_key',
    )
    .then(() => {
        console.log('ReCaptcha loaded')
    })
    .catch((e) => {
        console.error('Error when load ReCaptcha', e)
    })
}, [])
``` 

FOR REACT CLASS
``` 
import { loadReCaptcha } from 'recaptcha-v3-react-function-async'

componentDidMount () {
    loadReCaptcha(
        'your_site_key',
    )
    .then(() => {
        console.log('ReCaptcha loaded')
    })
    .catch((e) => {
        console.error('Error when load ReCaptcha', e)
    })
}
```
### loadRecaptcha API

| Parameters           | Type    | Default   | Required | Description                  |
|----------------------|---------|-----------|----------|------------------------------|
| your_site_key        | string  | undefined | true     | Corresponds to the site key you get from [here](https://www.google.com/recaptcha/admin#v3signup "V3 signup") |

### 2. Use `reCaptchaExecute` to integrate ReCaptcha in a particular component

#### invisible Recaptcha

Create a new component with the following code and give it a try!

```
import React, {useState} from 'react';
import axios from "axios";
import { reCaptchaExecute } from 'recaptcha-v3-react-function-async'

export default (props) => {
    let [form, setForm] = useState({
        profileLogin: '',
        profilePassword: '',
    })

    const onClickAuth = async (event) => {
        event.preventDefault();

        let gtoken = await reCaptchaExecute('site_key', 'auth')

        let result = await axios.post('/api/auth/login', {
            login: form.profileLogin,
            password: form.profilePassword,
            gtoken: gtoken
        });
        
        ...
    }

    const onChange = (event) => {
        setForm(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }
    
    return (
        <div className="container">
            <div className="row">

                <div className="card card-block login-block shadow my-3 mx-auto">
                    <div className="card-body">

                        <form onSubmit={onClickAuth}>
                            <div className="mb-3">
                                <label htmlFor="profileLogin" className="form-label">Логин</label>
                                <input type="text" className="form-control" id="profileLogin" name="profileLogin" minLength="5" value={form.profileLogin} onChange={onChange}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="profilePassword" className="form-label">Пароль</label>
                                <input type="password" className="form-control" id="profilePassword" name="profilePassword" minLength="8" value={form.profilePassword} onChange={onChange} autoComplete="new-password"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Войти</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

```

### reCaptchaExecute props

| Parameters           | Type    | Default   | Required | Description                  |
|----------------------|---------|-----------|----------|------------------------------|
| site_key              | string  | undefined | true     | Corresponds to the site key you get from [here](https://www.google.com/recaptcha/admin#v3signup "V3 signup") |
| action               | string  | undefined | true     | Name of the action performed by the reCaptcha, more on that [here](https://developers.google.com/recaptcha/docs/v3#Actions "V3 actions") |
