// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {execSync} from 'child_process';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('pempempem.decodePem', () => {
		
	var text = vscode.window.activeTextEditor?.document.getText();

	const decoded_cert = execSync(`echo \"${text}\" | openssl x509 -text -noout`, { encoding: 'utf-8'});

	let output = vscode.window.createOutputChannel("Pem decode");
	output.show();
	output.appendLine(`${decoded_cert}`);

});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
