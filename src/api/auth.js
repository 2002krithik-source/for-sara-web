const API_BASE = import.meta.env.VITE_API_BASE || ''

async function postJson(path, body) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })

  const data = await res.json().catch(() => null)
  if (!res.ok) {
    const err = (data && data.message) || res.statusText || 'Request failed'
    const error = new Error(err)
    error.status = res.status
    error.body = data
    throw error
  }
  return data
}

export async function login({ username, password, role }) {
  return postJson('/api/users/login', { username, password, role })
}

export async function register({ username, password }) {
  return postJson('/api/users/register', { username, password })
}

export default { login, register }
