namespace g {
	/**
	 * アセット読み込み失敗時のエラーの種別。
	 *
	 * この値はあくまでもエラーメッセージ出力のための補助情報であり、
	 * 網羅性・厳密性を追求したものではないことに注意。
	 */
	export enum AssetLoadErrorType {
		/**
		 * 明示されていない(以下のいずれかかもしれないし、そうでないかもしれない)。
		 */
		Unspecified,
		/**
		 * エンジンの再試行回数上限設定値を超えた。
		 */
		RetryLimitExceeded,
		/**
		 * ネットワークエラー。タイムアウトなど。
		 */
		NetworkError,
		/**
		 * リクエストに問題があるエラー。HTTP 4XX など。
		 */
		ClientError,
		/**
		 * サーバ側のエラー。HTTP 5XX など。
		 */
		ServerError
	}

}
