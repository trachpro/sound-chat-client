export const appActions = {
	NAVIGATE_TO_PATH: 'NAVIGATE_TO_PATH',

	/**
	 * Navigate to a defined path (see routes.js for defined routes)
	 * @param path
	 */
	navigateToPath: path => ({
		type: appActions.NAVIGATE_TO_PATH,
		payload: `${path}`
	}),
	urlChange: () => {
		return dispatch => {
			dispatch({
				type: "URL_CHANGE"
			})
		}
	},
	signOut: () => {
		return dispatch => {
			dispatch({
				type: 'SIGN_OUT',
			})
		}
	}

}