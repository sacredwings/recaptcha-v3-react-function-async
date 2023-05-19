'use client'

export default async (sitekey, action) => {
    return await window.grecaptcha.execute(sitekey, { action })
}
