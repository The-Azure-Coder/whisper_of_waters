import type { User } from '~/../shared/types/user' // I'll need to create this type

export const useAuth = () => {
  const user = useState<any | null>('user', () => null)
  const token = useCookie('auth_token')

  const login = async (credentials: any) => {
    try {
      const data = await $fetch<{ user: any, token: string }>('/api/auth/login', {
        method: 'POST',
        body: credentials
      })
      user.value = data.user
      return { success: true }
    } catch (error: any) {
      return { success: false, error: error.data?.statusMessage || 'Login failed' }
    }
  }

  const register = async (details: any) => {
    try {
      const data = await $fetch<{ user: any, token: string }>('/api/auth/register', {
        method: 'POST',
        body: details
      })
      user.value = data.user
      return { success: true }
    } catch (error: any) {
      return { success: false, error: error.data?.statusMessage || 'Registration failed' }
    }
  }

  const logout = () => {
    token.value = null
    user.value = null
    navigateTo('/login')
  }

  return {
    user,
    login,
    register,
    logout,
    isAuthenticated: computed(() => !!user.value),
    isAdmin: computed(() => user.value?.role === 'admin')
  }
}
