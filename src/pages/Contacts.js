const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                    <h1 className="title-1">Contacts</h1>

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Location</h2>
                            <p>Pavlodar, Kazakhstan</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Telegram / WhatsApp</h2>
                            <p><a href="tel:+77712470885">+7 (771) 247-08-85</a></p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Email</h2>
                            <p><a href="mailto:azaamat.se@gmail.com">azaamat.se@gmail.com</a></p>
                        </li>
                    </ul>

            </div>
        </main>
    );
}

export default Contacts;