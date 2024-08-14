export function BirthdayInvite() {
    return (
        <>
            <h1>It's My Birthday</h1>

            <h2>On the 1st of January</h2>

            {/* <!-- Example image URL --> */}
            <img
                src="//raw.githubusercontent.com/appbrewery/webdev/main/birthday-cake3.4.jpeg"
                width="300"
            />

            <h3>What to bring:</h3>
            <ul>
                <li>Cake</li>
                <li>Extra Someone</li>
                <li>Gift 🤗</li>
            </ul>
            <h3>Where to go:</h3>
            {/* <!-- Example Google Maps Link --> */}
            <a href="//www.google.com/maps/@35.7040744,139.5577317,3a,75y,289.6h,87.01t,0.72r/data=!3m6!1e1!3m4!1sgT28ssf0BB2LxZ63JNcL1w!2e0!7i13312!8i6656">
                Google Map Link
            </a>
        </>
    );
}
