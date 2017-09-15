// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,

	/* inspiration-only-dev */
	firebase: {
		apiKey: "AIzaSyAThHz_1KKcFf4cqFVBOea2WnzJsssrFNA",
		authDomain: "inspiration-only-dev.firebaseapp.com",
		databaseURL: "https://inspiration-only-dev.firebaseio.com",
		projectId: "inspiration-only-dev",
		storageBucket: "inspiration-only-dev.appspot.com",
		messagingSenderId: "543066602535"
	}
};
