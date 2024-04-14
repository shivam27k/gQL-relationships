'use client'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

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
