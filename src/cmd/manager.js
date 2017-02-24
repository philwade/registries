import inquirer from 'inquirer';
import { saveConfigFile } from '../lib';

export default function(opts, config) {
	return inquirer.prompt([
		{
			type: 'input',
			name: 'managerCommand',
			message: 'manager command:'
		}
	])
	.then(({ managerCommand }) => {
		config.manager = managerCommand;
		return saveConfigFile(config);
	});
}
