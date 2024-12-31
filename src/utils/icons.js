const Icons = ({ iconName, classStyle }) => {
    const IconList = {

        searchIcon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.79102 19.3799C14.7616 19.3799 18.791 15.3504 18.791 10.3799C18.791 5.40932 14.7616 1.37988 9.79102 1.37988C4.82045 1.37988 0.791016 5.40932 0.791016 10.3799C0.791016 15.3504 4.82045 19.3799 9.79102 19.3799Z" stroke="black" stroke-width="1.4218" stroke-miterlimit="10" />
                <path d="M21.7909 23.3282C22.1815 23.7187 22.8146 23.7187 23.2052 23.3282C23.5957 22.9377 23.5957 22.3045 23.2052 21.914L21.7909 23.3282ZM15.7909 17.3282L21.7909 23.3282L23.2052 21.914L17.2052 15.914L15.7909 17.3282Z" fill="black" />
            </svg>
        ),

        buttonArrow: (
            <svg width="29" height="10" viewBox="0 0 29 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.2803 1L27.2403 4.96L23.2803 8.92" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
                <path d="M25.75 4.95996H1" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
            </svg>
        ),

        arrowIcon: (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 5.00343L0 0V10L10 5.00343Z" fill="#231F20" />
            </svg>
        ),

        myWebsite: (
            <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.5017 13.2492C26.5017 5.93119 32.4329 0 39.7509 0C47.0688 0 53 5.93119 53 13.2492C53 20.5671 47.0688 26.4983 39.7509 26.4983C32.4329 26.4983 26.5017 20.5671 26.5017 13.2492ZM26.5017 13.2492C26.5017 5.93119 20.5671 0 13.2492 0C5.93119 0 0 5.93119 0 13.2492C0 20.5671 5.93119 26.4983 13.2492 26.4983C20.5671 26.4983 26.4983 20.5671 26.4983 13.2492H26.5017ZM13.2526 26.4983C5.93119 26.5017 0 32.4329 0 39.7509C0 47.0688 5.93119 53 13.2492 53C20.5671 53 26.4983 47.0688 26.4983 39.7509C26.4983 32.4329 20.5671 26.5017 13.2492 26.5017L13.2526 26.4983ZM39.7542 26.4983C32.4363 26.4983 26.5051 32.4295 26.5051 39.7475C26.5051 47.0654 32.4363 52.9966 39.7542 52.9966C47.0722 52.9966 53.0034 47.0654 53.0034 39.7475C53.0034 32.4295 47.0722 26.4983 39.7542 26.4983Z" fill="#00999E" />
            </svg>
        ),

        myCpl: (
            <svg width="53" height="48" viewBox="0 0 53 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50.9951 0H24.4199C23.3168 0 22.415 0.90177 22.415 2.00493V11.209H13.2109C12.1078 11.209 11.206 12.1108 11.206 13.2139V22.418H2.00493C0.90177 22.418 0 23.3198 0 24.4229V45.9632C0 47.0664 0.90177 47.9681 2.00493 47.9681H28.5801C29.6832 47.9681 30.585 47.0664 30.585 45.9632V36.7591H39.7891C40.8922 36.7591 41.794 35.8574 41.794 34.7542V25.5501H50.9981C52.1012 25.5501 53.003 24.6484 53.003 23.5452V2.00493C53.003 0.90177 52.1012 0 50.9981 0H50.9951Z" fill="#00999E" />
            </svg>
        ),

        myWebsiteLeads: (
            <svg width="53" height="47" viewBox="0 0 53 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.32781 7.71056C9.14934 5.79345 11.5721 4.73709 14.1496 4.73709C16.7271 4.73709 19.1469 5.79345 20.9714 7.71056C22.781 9.61563 23.7841 12.1467 23.796 14.8403V14.8884H28.2992V14.8403C28.3111 12.1467 29.3112 9.61563 31.1238 7.71056C32.9453 5.79345 35.3681 4.73709 37.9456 4.73709C40.5231 4.73709 42.9429 5.79345 44.7674 7.71056C46.5889 9.62767 47.5919 12.1768 47.5919 14.8884H52.0922C52.0922 12.878 51.7172 10.9278 50.979 9.09196C50.2677 7.31931 49.2468 5.72724 47.9491 4.36089C46.6514 2.99454 45.1364 1.92012 43.4518 1.17073C41.7077 0.394256 39.8534 0 37.9456 0C36.0377 0 34.1835 0.394256 32.4393 1.17073C30.7547 1.92012 29.2427 2.99454 27.942 4.36089C27.2247 5.1163 26.5938 5.94393 26.0491 6.83176C25.5074 5.94393 24.8764 5.1163 24.1561 4.36089C22.8584 2.99454 21.3435 1.92012 19.6589 1.17073C17.9147 0.394256 16.0604 0 14.1526 0C12.2448 0 10.3905 0.394256 8.64634 1.17073C6.96172 1.92012 5.44973 2.99454 4.14907 4.36089C2.85138 5.72724 1.83049 7.31931 1.11914 9.09196C0.381002 10.9278 0.00598145 12.881 0.00598145 14.8884H4.50623C4.50623 12.1768 5.50926 9.62767 7.33079 7.71056H7.32781ZM47.9402 20.2183C46.6425 18.852 45.1275 17.7775 43.4429 17.0282C41.6988 16.2517 39.8445 15.8574 37.9367 15.8574C36.0288 15.8574 34.1746 16.2517 32.4304 17.0282C30.7458 17.7775 29.2338 18.852 27.9331 20.2183C27.2158 20.9737 26.5848 21.8014 26.0402 22.6892C25.4985 21.8014 24.8675 20.9737 24.1472 20.2183C22.8495 18.852 21.3346 17.7775 19.6499 17.0282C17.9058 16.2517 16.0515 15.8574 14.1437 15.8574C12.2358 15.8574 10.3816 16.2517 8.63743 17.0282C6.95281 17.7775 5.44082 18.852 4.14016 20.2183C2.84247 21.5847 1.82158 23.1767 1.11023 24.9494C0.372091 26.7852 -0.00292969 28.7385 -0.00292969 30.7458H4.49732C4.49732 28.0342 5.50035 25.4851 7.32188 23.568C9.14341 21.6509 11.5662 20.5945 14.1437 20.5945C16.7212 20.5945 19.141 21.6509 20.9655 23.568C22.7751 25.4731 23.7781 28.0041 23.7901 30.6977V30.7458H28.2933V30.6977C28.3052 28.0041 29.3052 25.4731 31.1178 23.568C32.9394 21.6509 35.3621 20.5945 37.9396 20.5945C40.5172 20.5945 42.9369 21.6509 44.7614 23.568C46.5859 25.4851 47.586 28.0342 47.586 30.7458H52.0863C52.0863 28.7354 51.7112 26.7852 50.9731 24.9494C50.2617 23.1767 49.2409 21.5847 47.9432 20.2183H47.9402ZM43.4429 32.8826C45.1275 33.632 46.6425 34.7065 47.9402 36.0728H47.9432C49.2409 37.4392 50.2617 39.0312 50.9731 40.8039C51.7112 42.6397 52.0863 44.5899 52.0863 46.6003H47.586C47.586 43.8887 46.583 41.3396 44.7614 39.4225C42.9369 37.5054 40.5172 36.449 37.9396 36.449C35.3621 36.449 32.9394 37.5054 31.1178 39.4225C29.3052 41.3275 28.3052 43.8586 28.2933 46.5522V46.6003H23.7901V46.5522C23.7781 43.8586 22.7751 41.3275 20.9655 39.4225C19.141 37.5054 16.7212 36.449 14.1437 36.449C11.5662 36.449 9.14341 37.5054 7.32188 39.4225C5.50035 41.3396 4.49732 43.8887 4.49732 46.6003H-0.00292969C-0.00292969 44.5929 0.372091 42.6397 1.11023 40.8039C1.82158 39.0312 2.84247 37.4392 4.14016 36.0728C5.44082 34.7065 6.95281 33.632 8.63743 32.8826C10.3816 32.1062 12.2358 31.7119 14.1437 31.7119C16.0515 31.7119 17.9058 32.1062 19.6499 32.8826C21.3346 33.632 22.8495 34.7065 24.1472 36.0728C24.8675 36.8282 25.4985 37.6558 26.0402 38.5437C26.5848 37.6558 27.2158 36.8282 27.9331 36.0728C29.2338 34.7065 30.7458 33.632 32.4304 32.8826C34.1746 32.1062 36.0288 31.7119 37.9367 31.7119C39.8445 31.7119 41.6988 32.1062 43.4429 32.8826Z" fill="#00999E" />
            </svg>
        ),

        myMarketing: (
            <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44.8468 33.4154C51.8234 40.3919 54.92 48.6045 51.7639 51.7607C48.6078 54.9168 40.3952 51.8201 33.4186 44.8436C30.2228 41.6478 27.84 38.1909 26.5016 35.081C25.1631 38.1909 22.7803 41.6478 19.5845 44.8436C12.6079 51.8201 4.39537 54.9168 1.23924 51.7607C-1.9169 48.6045 1.17975 40.3919 8.1563 33.4154C11.3521 30.2196 14.809 27.8368 17.9189 26.4983C14.809 25.1599 11.3521 22.7771 8.1563 19.5813C1.17644 12.6047 -1.92021 4.39213 1.23593 1.23599C4.39207 -1.92015 12.6046 1.17651 19.5812 8.15306C22.777 11.3489 25.1598 14.8057 26.4983 17.9156C27.8367 14.8057 30.2195 11.3489 33.4153 8.15306C40.3919 1.17651 48.6078 -1.92015 51.7639 1.23599C54.92 4.39213 51.8234 12.6047 44.8468 19.5813C41.651 22.7771 38.1942 25.1599 35.0843 26.4983C38.1942 27.8368 41.651 30.2196 44.8468 33.4154Z" fill="#00999E" />
            </svg>
        ),

    };

    return (
        <span className={`flex ${classStyle}`}>
            {iconName && IconList[iconName]}
        </span>
    );
};

export default Icons;