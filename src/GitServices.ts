const clone = require("git-clone");
import { runUnitTests } from "./ci-services";
import * as shell from "shelljs";

export const cloneGitRepo = (repoURL: string) => {
	console.log(__dirname);
	const dir = __dirname + "/../../repos/";
	shell.exec(`rm -rf ${dir}`);
	clone(repoURL, dir, null, () => {
		console.log(`cloned git repo: "${repoURL}" to ${dir}`);
		runUnitTests(repoURL);
	}
	);
}
