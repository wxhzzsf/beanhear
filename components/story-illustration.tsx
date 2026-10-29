export function StoryIllustration() {
  return (
    <svg
      className="story-illustration"
      viewBox="0 0 520 500"
      fill="none"
      role="img"
      aria-labelledby="beanhear-story-title beanhear-story-description"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="beanhear-story-title">A little story, under the moon</title>
      <desc id="beanhear-story-description">
        A sleepy rabbit rests beside an open storybook, surrounded by garden
        leaves, a crescent moon, and a few golden stars.
      </desc>
      <defs>
        <linearGradient id="beanhear-night" x1="265" y1="63" x2="265" y2="373" gradientUnits="userSpaceOnUse">
          <stop stopColor="#29483E" />
          <stop offset="1" stopColor="#426453" />
        </linearGradient>
        <linearGradient id="beanhear-page" x1="261" y1="367" x2="261" y2="462" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFCF5" />
          <stop offset="1" stopColor="#F0E7D6" />
        </linearGradient>
        <linearGradient id="beanhear-blanket" x1="230" y1="317" x2="341" y2="405" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E69A7D" />
          <stop offset="1" stopColor="#E07A5F" />
        </linearGradient>
      </defs>

      {/* A quiet night seen through an old, softly rounded window. */}
      <path d="M117 349V191C117 111 181 49 261 49C341 49 405 111 405 191V349H117Z" fill="#D6CDB8" />
      <path d="M128 344V192C128 118 187 60 261 60C335 60 394 118 394 192V344H128Z" fill="url(#beanhear-night)" />
      <path d="M139 338V193C139 125 193 71 261 71C329 71 383 125 383 193V338" stroke="#6A8066" strokeOpacity=".5" />
      <path d="M140 296C170 268 198 275 230 294C271 255 302 260 336 281C354 266 369 264 383 273V339H140V296Z" fill="#57735B" fillOpacity=".45" />
      <path d="M139 319C179 298 212 311 241 325C290 295 337 296 383 314V343H139V319Z" fill="#8FA087" fillOpacity=".24" />

      <path d="M202 108C193 121 195 140 207 151C216 159 227 161 238 157C233 171 216 180 201 176C183 173 172 156 175 139C177 125 187 113 202 108Z" fill="#EAD79E" />
      <path d="M323 117L326 126L335 129L326 132L323 141L320 132L311 129L320 126L323 117Z" fill="#EAD79E" />
      <path d="M349 207L352 215L360 218L352 221L349 229L346 221L338 218L346 215L349 207Z" fill="#EAD79E" />
      <path d="M161 205L163 211L169 213L163 215L161 221L159 215L153 213L159 211L161 205Z" fill="#EAD79E" />
      <circle cx="278" cy="98" r="2.5" fill="#EAD79E" />
      <circle cx="353" cy="165" r="2" fill="#EAD79E" />
      <circle cx="290" cy="172" r="2" fill="#EAD79E" />
      <circle cx="207" cy="216" r="2" fill="#EAD79E" />
      <circle cx="164" cy="167" r="1.5" fill="#EAD79E" />
      <circle cx="369" cy="253" r="1.5" fill="#EAD79E" />
      <path d="M109 346H413" stroke="#C0B69F" strokeWidth="8" strokeLinecap="round" />
      <path d="M107 350H415" stroke="#FBF7F2" strokeWidth="3" strokeLinecap="round" />

      {/* Garden leaves reach in around the story. */}
      <path d="M115 417C114 376 99 327 73 295" stroke="#29483E" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M90 321C65 322 50 304 51 285C73 285 90 300 90 321Z" fill="#B8C7AF" />
      <path d="M101 345C105 323 120 312 137 314C134 333 121 345 101 345Z" fill="#8DA584" />
      <path d="M107 368C82 371 65 356 62 339C84 337 102 347 107 368Z" fill="#8DA584" />
      <path d="M114 395C118 372 134 359 151 362C148 382 135 395 114 395Z" fill="#B8C7AF" />
      <path d="M99 415C83 400 73 381 73 366" stroke="#29483E" strokeWidth="2" strokeLinecap="round" />
      <path d="M85 396C65 396 53 384 50 368C68 367 82 377 85 396Z" fill="#D8C88F" />
      <path d="M89 405C89 387 100 377 112 376C114 390 104 403 89 405Z" fill="#B8C7AF" />
      <path d="M406 417C407 370 424 324 447 297" stroke="#29483E" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M431 322C430 303 443 287 463 282C467 303 453 319 431 322Z" fill="#B8C7AF" />
      <path d="M420 347C399 343 389 328 391 310C411 313 423 326 420 347Z" fill="#8DA584" />
      <path d="M414 372C435 369 450 353 448 335C427 338 414 352 414 372Z" fill="#8DA584" />
      <path d="M407 398C389 389 382 374 386 359C405 366 413 380 407 398Z" fill="#B8C7AF" />
      <path d="M422 414C435 402 444 389 448 373" stroke="#29483E" strokeWidth="2" strokeLinecap="round" />
      <path d="M437 397C435 379 444 365 459 361C462 378 455 392 437 397Z" fill="#D8C88F" />
      <path d="M430 406C414 403 406 392 407 380C423 382 433 392 430 406Z" fill="#B8C7AF" />
      <path d="M75 307L86 316M72 352L100 364M460 293L438 315M443 346L420 367" stroke="#29483E" strokeOpacity=".24" strokeWidth="1.5" strokeLinecap="round" />

      <ellipse cx="266" cy="423" rx="157" ry="18" fill="#D4C6B1" fillOpacity=".42" />

      {/* A soft, sleepy little listener. */}
      <path d="M228 256C212 237 198 192 201 171C202 157 211 153 221 161C239 176 251 218 249 247L228 256Z" fill="#FBF7F2" />
      <path d="M221 236C213 217 207 188 211 175C223 187 234 217 234 239L221 236Z" fill="#E8B7A1" />
      <path d="M270 242C268 214 275 169 288 154C297 143 307 148 309 162C312 185 300 229 286 249L270 242Z" fill="#FBF7F2" />
      <path d="M283 232C280 214 286 179 297 163C301 181 293 211 283 232Z" fill="#E8B7A1" />
      <path d="M236 293C209 311 196 341 202 369C208 399 236 414 269 414C307 414 334 393 334 365C334 333 314 307 288 292L236 293Z" fill="#EEE7DA" />
      <path d="M319 357C335 344 351 351 352 365C353 379 340 389 325 384" fill="#FBF7F2" />
      <path d="M204 351C225 331 251 327 273 331C301 336 321 356 328 388C306 411 262 423 229 410C212 403 200 386 204 351Z" fill="url(#beanhear-blanket)" />
      <path d="M210 369C239 348 268 345 299 354M220 395C250 372 285 370 321 380" stroke="#F2BD9F" strokeWidth="2" strokeLinecap="round" />
      <path d="M253 339L257 349L268 349L259 356L263 366L253 360L244 366L247 356L239 349L250 349L253 339Z" fill="#F5D7AC" />
      <path d="M290 383L293 390L300 391L294 395L296 403L290 398L283 403L286 395L280 391L287 390L290 383Z" fill="#F5D7AC" />
      <path d="M208 276C208 248 230 226 257 226C289 226 311 249 311 278C311 308 289 325 259 325C230 325 208 307 208 276Z" fill="#FBF7F2" />
      <path d="M224 278C229 283 236 283 241 278M272 278C277 283 284 283 289 278" stroke="#29483E" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="226" cy="291" rx="10" ry="5" fill="#E8B7A1" fillOpacity=".65" />
      <ellipse cx="288" cy="291" rx="10" ry="5" fill="#E8B7A1" fillOpacity=".65" />
      <path d="M253 290C253 287 262 287 262 290C262 292 258 295 258 295C258 295 253 292 253 290Z" fill="#A57565" />
      <path d="M258 296V300M258 300C254 303 251 302 249 300M258 300C261 303 265 302 267 300" stroke="#A57565" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M222 326C217 335 220 346 232 349C242 351 248 344 246 337" fill="#FBF7F2" />
      <path d="M292 327C301 333 303 343 295 350C288 356 279 353 276 347" fill="#FBF7F2" />

      {/* The book stays open at the best part. */}
      <path d="M147 395C188 383 226 389 262 406C295 389 337 383 379 395L370 451C334 442 295 449 262 466C228 449 190 442 154 451L147 395Z" fill="#29483E" />
      <path d="M154 389C189 382 226 389 262 405V457C230 442 192 436 160 443L154 389Z" fill="#E5D9C4" />
      <path d="M370 389C334 382 296 389 262 405V457C294 442 332 436 364 443L370 389Z" fill="#E5D9C4" />
      <path d="M161 380C195 377 230 384 262 402V450C229 434 195 428 166 433L161 380Z" fill="url(#beanhear-page)" />
      <path d="M363 380C328 377 293 384 262 402V450C294 434 329 428 358 433L363 380Z" fill="url(#beanhear-page)" />
      <path d="M262 403V450" stroke="#D7C8AD" strokeWidth="1.5" />
      <path d="M181 397C198 397 214 400 230 406M182 406C199 406 219 410 243 419M183 415C200 416 214 419 229 424M283 418C306 410 325 407 344 407M283 427C299 422 314 418 328 417" stroke="#C3B59B" strokeWidth="2" strokeLinecap="round" />
      <path d="M315 392C309 393 303 395 298 397L298 420L306 413L314 415L315 392Z" fill="#E07A5F" />
      <path d="M163 438C199 434 231 442 262 457C293 442 326 434 361 438" stroke="#FBF7F2" strokeWidth="1.5" strokeLinecap="round" />

      <path d="M111 252L114 260L122 263L114 266L111 274L108 266L100 263L108 260L111 252Z" fill="#D6BD78" />
      <path d="M423 222L425 228L431 230L425 232L423 238L421 232L415 230L421 228L423 222Z" fill="#D6BD78" />
      <circle cx="98" cy="190" r="3" fill="#E07A5F" />
      <circle cx="419" cy="285" r="3" fill="#E07A5F" />
      <path d="M125 455C128 450 132 447 137 446M392 453C390 449 387 447 383 446" stroke="#A7B49C" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
