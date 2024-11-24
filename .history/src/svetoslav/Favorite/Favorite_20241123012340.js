import styled from "styled-components";


const FavoriteContainer = ({ className, someId }) => {
	return (
		<>
			<div>
				Add to Favorite
				{someId}
			</div>
		</>
	)
}

export const Favorite = styled(FavoriteContainer)`
	
`
