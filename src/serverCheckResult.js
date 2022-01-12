import axios from "axios"
import querystring from "querystring"

/**
 * Validate Google reCaptcha
 * @param {string} captchaResponse - 'g-recaptcha-response'
 * @param {string} secret - your Google reCaptcha secret string
 * @returns {Promise}
 */

export async function serverCheckResult (captchaResponse, secret) {
    let params = {
        secret: secret,
        response: captchaResponse
    };

    try {
        let result = await axios.post(
            'https://www.google.com/recaptcha/api/siteverify',
            querystring.stringify(params),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})

        return result.data.success
    }
    catch (e) {
        throw (e)
    }
}