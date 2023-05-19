'use client'

export default async (key) => {
    try {
        let script = document.createElement('script')

        script.src = `https://www.google.com/recaptcha/api.js?render=${key}`
        script.async = true

        document.body.appendChild(script)

        return true
    } catch (e) {
        return {err: e}
    }
}