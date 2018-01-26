const clone = require("git-clone");

export const cloneGitRepo = (repoURL: string) => {
	console.log(__dirname);
	const dir = __dirname + "/../../repos/"
	clone(repoURL, dir, null, () => console.log(`cloned git repo: "${repoURL}" to ${dir}`));
}
