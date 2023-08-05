'use client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from "../types/supabase" 

export default function AuthForm() {
  const supabase = createClientComponentClient<Database>()
  const redirect = process.env.REDIRECT_URL;
  return (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      theme="dark"
      showLinks={true}
      providers={['google']}
      redirectTo={window.location.origin + "/auth/callback"}
    />
  )
}