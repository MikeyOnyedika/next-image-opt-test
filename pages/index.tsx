import Head from "next/head";
import React from 'react'
import Image from 'next/image'

export async function getStaticProps() {

	const queryString = "https://api.unsplash.com/search/photos?query=mountains"
	const data = await (await fetch(queryString, {
		headers: {
			"Accept-Version": "v1",
			Authorization: `Client-ID ${process.env.ACCESS_KEY}`,
		}
	}
	)).json()

	const images = data.results.map(img => ({
		id: img.id,
		urls: img.urls,
		description: img.description, altDescription: img.alt_description,
		blurHash: img.blur_hash
	}))
	console.log(data.results)


	return {
		props: {
			images
		}
	}


}

export default function Home({ images }) {
	const mode = "optimised" // or "raw"

	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="use-credentials" />
				<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap" rel="stylesheet" />
			</Head>

			<h1>
				Mountain Images
			</h1>
			<div className="images" style={{ display: "flex", gap: "1rem", flexDirection: "column", width: "100vw" }}>
				{images.map(img => (
					<div key={img.id} style={{ position: "relative" }}>
						{mode === "optimised" ? (
							<Image src={img.urls.full} alt={img.altDescription} width={1500} height={1000} />
						) : (
							<img src={img.urls.full} alt={img.altDescription} width={1500} height={1000} />
						)
						}
					</div>
				))}
			</div>
		</>
	)
}
