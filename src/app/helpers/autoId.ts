export function autoId(): string {
    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    let autoId = ''

    for (let i = 0; i < 8; i++) {
      autoId += CHARS.charAt(
        Math.floor(Math.random() * CHARS.length)
      )
    }
    return autoId
  }