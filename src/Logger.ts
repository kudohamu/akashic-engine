namespace g {
	/**
	 * ログレベル。
	 *
	 * - Error: サーバ側でも収集される、ゲーム続行不可能なクリティカルなエラーログ
	 * - Warn: サーバ側でも収集される、ゲーム続行可能だが危険な状態であることを示す警告ログ
	 * - Info: クライアントでのみ収集される情報ログ
	 * - Debug: サンドボックス環境でのみ収集される開発時限定のログ。リリース時には本処理をすべて消してリリースすることが望ましい
	 */
	export enum LogLevel {
		Error,
		Warn,
		Info,
		Debug
	}

	/**
	 * ログ出力情報。
	 */
	export interface Log {
		/**
		 * ログレベル。
		 */
		level: LogLevel;
		/**
		 * ログの出力元である `Game` 。
		 */
		game: Game;
		/**
		 * ログ内容。
		 */
		message: string;
		/**
		 * ゲーム開発者が任意に利用できる、汎用のログ補助情報。
		 */
		cause?: any;
	}

	/**
	 * デバッグ/エラー用のログ出力機構。
	 */
	export class Logger {
		/**
		 * この `Logger` に紐づく `Game` 。
		 */
		game: Game;
		/**
		 * ログ出力イベント。
		 * ログ出力は、このイベントをfireして各ハンドラにログ内容を渡すことで実現される。
		 */
		logging: Trigger<Log>;

		/**
		 * `Logger` のインスタンスを生成する。
		 * @param game この `Logger` に紐づく `Game` 。
		 */
		constructor(game: Game) {
			this.game = game;
			this.logging = new Trigger<Log>();
		}

		/**
		 * `LogLevel.Error` のログを出力する。
		 * @param message ログメッセージ
		 * @param cause 追加の補助情報。省略された場合、 `undefined`
		 */
		error(message: string, cause?: any): void {
			this.logging.fire({
				game: this.game,
				level: LogLevel.Error,
				message: message,
				cause: cause
			});
		}

		/**
		 * `LogLevel.Warn` のログを出力する。
		 * @param message ログメッセージ
		 * @param cause 追加の補助情報。省略された場合、 `undefined`
		 */
		warn(message: string, cause?: any): void {
			this.logging.fire({
				game: this.game,
				level: LogLevel.Warn,
				message: message,
				cause: cause
			});
		}

		/**
		 * `LogLevel.Info` のログを出力する。
		 * @param message ログメッセージ
		 * @param cause 追加の補助情報。省略された場合、 `undefined`
		 */
		info(message: string, cause?: any): void {
			this.logging.fire({
				game: this.game,
				level: LogLevel.Info,
				message: message,
				cause: cause
			});
		}

		/**
		 * `LogLevel.Debug` のログを出力する。
		 * @param message ログメッセージ
		 * @param cause 追加の補助情報。省略された場合、 `undefined`
		 */
		debug(message: string, cause?: any): void {
			this.logging.fire({
				game: this.game,
				level: LogLevel.Debug,
				message: message,
				cause: cause
			});
		}
	}
}
