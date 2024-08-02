import { useEffect } from "react"



const MainPage = () => {

    useEffect(() => {
        async function fetchIssueList() {
            const response = await fetch(`https://api.github.com/repos/angular/angular-cli/issues`)
            const response_data = await response.json()
            console.log(response_data) //--> 이 데이터를 이제 rtk 의 조회기능을 만들어 전역상태관리 해주면 된다
        }
        fetchIssueList()
    }, [])

    return <div>메인 페이지</div>
}

export default MainPage