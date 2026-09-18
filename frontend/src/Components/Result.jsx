function Result({ shortUrl }) {

    if (!shortUrl) {
        return null;
    }

    const copyUrl = async () => {

        await navigator.clipboard.writeText(shortUrl);

        alert("URL copied!");
    };


    return (
        <div className="result">

            <div className="result-title">

                <span>✅</span>

                <h3>
                    Your short URL is ready!
                </h3>

            </div>


            <div className="short-url">

                <span>
                    {shortUrl}
                </span>

                <button onClick={copyUrl}>
                    📋 Copy
                </button>

            </div>


            <a
                href={shortUrl}
                target="_blank"
                rel="noreferrer"
            >
                ↗ Open Short URL
            </a>

        </div>
    );
}

export default Result;