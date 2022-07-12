function Header({ handleChange, value, handleSubmit }) {
  return (
    <>
      <nav className="navbar">
        <h5 className="title-navbar">
            Movie App
        </h5>
        <input
            className="input"
            placeholder="Search"
            onChange={handleChange}
            onSubmit={handleSubmit}
            value={value}
          />
      </nav>
    </>
  )
}

export default Header;