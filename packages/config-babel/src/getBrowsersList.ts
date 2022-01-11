
export function getBrowsersList(
	env: string,
	setting: undefined | string[] | Record<string, string[]>,
): string | string[] {
	if (setting == null) {
		return DEFAULT_ESSEX_BROWSERSLIST
	} else if (Array.isArray(setting)) {
		return setting
	} else {
		return setting[env]
	}
}

const DEFAULT_ESSEX_BROWSERSLIST = ['>0.5%', 'not IE 11', 'not dead']