namespace g {
	/**
	 * シーンに与えるローカルティックの種類
	 */
	export enum LocalTickMode {
		/**
		 * ローカルティックを受け取らない。
		 * 通常の(非ローカル)シーン。
		 */
		NonLocal,

		/**
		 * ローカルティックのみ受け取る。
		 * ローカルシーン。
		 */
		FullLocal,

		/**
		 * 消化すべきティックがない場合にローカルティックを受け取る。
		 * ローカルティック補間シーン。
		 */
		InterpolateLocal
	}
}
