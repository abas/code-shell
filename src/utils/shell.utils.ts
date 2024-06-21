import { exec } from 'child_process';

/**
 * Function to run a shell command
 * @param command 
 * @returns result of command
 */
export async function ExecuteShell(command: string): Promise<string> {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.log(error)
        reject(error);
        return;
        }
      if (stderr) {
        console.log(error)
        reject(`stderr: ${stderr}`);
        return;
      }
      console.log(stdout)
      resolve(stdout);
    });
  });
};
