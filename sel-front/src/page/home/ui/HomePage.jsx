const HomePage = () => {
    return <section className="pt-20 pb-20" id="header">
        <div className="container">
            <div className="row items-center">
                <div className="col md:w-8/12 lg:w-6/12 mx-auto">
                    <h1 className="display-4 letter-spacing-xs mb-6">Статистика</h1>
                    <p className="text-muted leading-6 mb-6 h5">Логи, санкции, белый список</p>
                </div>
                <div className="col lg:w-6/12 mt-12 lg:mt-0">
                    <img className="w-full max-w-[406px] mx-auto shadow-none drop-shadow-none lg:mr-0" alt="product image" width="406" height="300" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMOoxkSe4Di9tMmGs1YXCkxtKhl4LChaUQYQ&s" id="" />
                </div>
            </div>
        </div>
    </section>
}

export default HomePage;