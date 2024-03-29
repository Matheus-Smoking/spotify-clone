export const getToken = (access) => {
  const urltoken = access.replace('?code=','')
  console.log(urltoken, 'acesso tokens')
  return (
    fetch('https://accounts.spotify.com/api/token',
      {
        method: 'post',
        body: `grant_type=authorization_code&code=${urltoken}&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic MzM2ZTc3YmZhZWJjNDMwMjljNWUwODZkNmE1ZjE5MTY6NmY1OTFmMTg5OWE0NDdmYmJkMjllN2NiMWY1NWU3YjE=',
        }
      })
      .then(res => res.json())
      .then(res => {
        const token = res.access_token;
        window.location.search = ''
        return localStorage.setItem("token", token)
      })


  )
}
export const getAccess = () => {
  return(
    window.location.href = 'https://accounts.spotify.com/authorize?client_id=336e77bfaebc43029c5e086d6a5f1916&response_type=code&redirect_uri=http://localhost:3000/&scope=user-read-private%20user-read-email'
  )
}


