const clone = require("git-clone");

export const cloneGit = () => {
	console.log(__dirname);
	clone("https://github.com/ijasm/simple-repo.git", __dirname + "/../repo/", null, () => console.log("done!"));
}
