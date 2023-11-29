import CustomButton from "../Components/CustomButton";

const SignUpPage = () => {
  return (
    <div className="isolate px-6 py-16 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Sign Up
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          sign up and enjoy
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <p className="block text-sm font-semibold leading-6 text-gray-900">
              이름
            </p>
            <div className="mt-2.5">
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="flex justify-end gap-x-3 pr-4">
            <div className="flex flex-col">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                성별
              </p>
              <div className="mt-2.5">
                <select
                  id="gender"
                  name="gender"
                  className="text-gray-900 py-2 pr-3 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md border-0 focus:ring-2 focus:ring-inset"
                >
                  <option value="male">남자</option>
                  <option value="female">여자</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                주 세션
              </p>
              <div className="mt-2.5">
                <select
                  id="session"
                  name="session"
                  className="text-gray-900 py-2 pr-3 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md border-0 focus:ring-2 focus:ring-inset"
                >
                  <option value="vocal">보컬</option>
                  <option value="guitar">기타</option>
                  <option value="keyboard">키보드</option>
                  <option value="bass">베이스</option>
                  <option value="drum">드럼</option>
                </select>
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <p className="block text-sm font-semibold leading-6 text-gray-900">
              이메일
            </p>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <p className="block text-sm font-semibold leading-6 text-gray-900">
              전화번호
            </p>
            <div className="mt-2.5">
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="block">
            <p className="block text-sm font-semibold leading-6 text-gray-900">
              비밀번호
            </p>
            <div className="mt-2.5">
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="block">
            <p className="block text-sm font-semibold leading-6 text-gray-900">
              비밀번호 확인
            </p>
            <div className="mt-2.5">
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <CustomButton title={"회원가입"} />
      </div>
    </div>
  );
};

export default SignUpPage;
