import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  let disposableFold = vscode.commands.registerCommand('extension.foldAll', () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      vscode.commands.executeCommand('editor.foldAll');
    }
  });

  let disposableUnfold = vscode.commands.registerCommand('extension.unfoldAll', () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      vscode.commands.executeCommand('editor.unfoldAll');
    }
  });

  context.subscriptions.push(disposableFold);
  context.subscriptions.push(disposableUnfold);
}

export function deactivate() {}
