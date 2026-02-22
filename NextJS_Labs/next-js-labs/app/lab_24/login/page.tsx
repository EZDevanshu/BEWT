"use client"

function LoginPage() {
    const login = ()=>{
        const expiry = Date.now() + 5000;
        const token = `token=123|${expiry}`;
        document.cookie = `token=${token}; path=/`
        window.location.href = "/lab_24/products"
    };

  return (
    <div>
        <button onClick={login}>Login</button>
    </div>
  )
}

export default LoginPage