const keys = {
  theme: 'celestial-current-theme',
}

const parse = (json) => {
  try {
    const parsed = JSON.parse(json)
    return parsed
  } catch (err) {
    return null
  }
}

const set = (key, data) => {
  const json = JSON.stringify(data)
  localStorage.setItem(key, json)
}

const get = (key) => {
  const item = localStorage.getItem(key)
  const data = parse(item)
  return data
}

const saveTheme = theme => set(keys.theme, theme)

const loadTheme = () => get(keys.theme)

export {
  saveTheme,
  loadTheme
}
