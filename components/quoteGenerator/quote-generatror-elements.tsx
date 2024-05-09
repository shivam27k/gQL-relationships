'use client'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

interface GradientBackgroundProps {
	children: React.ReactNode
}

const GradientBackgroundWrapper = styled.div`
	background: linear-gradient(to right, #000046, #1cb5e0);
	background-size: 400% 400%;
	animation: gradient 8s ease infinite;
	height: 100vh;
	width: 100vw;
	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
`

export const GradientBackground = ({ children }: GradientBackgroundProps) => {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	return (
		<GradientBackgroundWrapper>
			{isMounted && children}
		</GradientBackgroundWrapper>
	)
}

export const BackgroundImage1 = styled(Image)`
	position: relative;
	z-index: 1;
	margin-left: -10px;
	margin-top: -10px;
`
export const BackgroundImage2 = styled(Image)`
	position: fixed;
	z-index: 1;
	right: -120px;
	bottom: -10px;
`

export const FooterContainer = styled.div`
	width: 100vw;
	text-align: center;
	font-size: 1.5rem;
	font-family: 'Source Code Pro', sans-serif;
	position: absolute;
	bottom: 0;
	color: #fff;
	z-index: 99999;
	margin-bottom: 10px;
`
export const FooterLink = styled(Link)`
	color: #fff;
`

export const QuoteGeneratorContainer = styled.div`
	min-height: 350px;
	min-width: 350px;
	height: 70vh;
	width: 70vw;
	border: 2px solid #ffffff22;
	border-radius: 15px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	position: absolute;
	z-index: 2;

	background: rgba(0, 0, 70, 0.3);
	box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(20px);
	-webkit-backdrop-filter: blur(20px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);
`
export const QuoteGeneratorInnerContainer = styled.div`
	width: 100%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
`
export const QuoteGeneratorTitle = styled.div`
	font-family: 'Permanent Marker', cursive;
	font-size: 50px;
	text-align: center;
	color: #fff;
	padding: 0px 20px 0px 20px;
	position: relative;
	@media only screen and (max-width: 600px) {
		font-size: 30px;
	}
`
export const QuoteGeneratorSubTitle = styled.div`
	color: #fff;
	font-family: 'Caveat', cursive;
	font-size: 35px;
	position: relative;
	width: 100%;
	text-align: center;
	padding: 0px 20px 0px 20px;
	@media only screen and (max-width: 600px) {
		font-size: 25px;
	}
`
export const GenerateQuoteButton = styled.button`
	height: 100px;
	width: 300px;
	border: 2px solid darkgrey;
	border-radius: 20px;

	margin-top: 20px;
	position: relative;
	transition: 0.2s all ease-in-out;
	cursor: pointer;
	top: 20px;
	margin: auto;
	transform-origin: center;

	background: rgba(0, 0, 70, 0.3);
	box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(20px);
	-webkit-backdrop-filter: blur(20px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);
	&:hover {
		filter: brightness(2);
		transition: 0.2s all ease-in-out;
		transform: scale(1.1);
		transform-origin: center;
	}
`
export const GenerateQuoteButtonText = styled.span`
	color: #fff;
	font-family: 'Caveat', cursive;
	font-size: 35px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
	width: 100%;
`
