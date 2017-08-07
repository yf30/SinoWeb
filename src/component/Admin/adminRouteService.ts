


var adminUrl='http://192.168.0.124:333/ow';
// var adminUrl='/ow';

var adminRoutes={
    adminUrl:adminUrl,
    news:{
        getNewsDetail(id){
            return `${adminUrl}/News/GetNewsDetail?Id=${id}`
        },
        getNewsList(startDateTime,endDateTime,NewsTitle,PageSize,CurPage){
            return `${adminUrl}/News/GetNewsList?startDateTime=${startDateTime}&endDateTime=${endDateTime}&NewsTitle=${NewsTitle}&PageSize=${PageSize}&CurPage=${CurPage}`
        },
        delNews(id){
            return `${adminUrl}/News/DelNews?Id=${id}`
        },
        addNews(){
            return `${adminUrl}/News/AddNews`
        },
        editNews(){
            return `${adminUrl}/News/EditNews`
        },
        getAllNews(){
            return `${adminUrl}/News/getAllNews`
        }
    },
    recruit:{
        getRecruitList(startDateTime,endDateTime,NewsTitle,PageSize,CurPage){
            return `${adminUrl}/Recruit/GetRecruitsList?startDateTime=${startDateTime}&endDateTime=${endDateTime}&RecruitPost=${NewsTitle}&PageSize=${PageSize}&CurPage=${CurPage}`
        },
        getRecruitDetail(id){
            return `${adminUrl}/Recruit/GetRecruitDetail?Id=${id}`
        },
        delRecruit(id){
            return `${adminUrl}/Recruit/DelRecruit?Id=${id}`
        },
        addRecruit(){
            return `${adminUrl}/Recruit/AddRecruit`
        },
        editRecruit(){
            return `${adminUrl}/Recruit/EditRecruit`
        },
        getAllRecruitsList(){
            return `${adminUrl}/Recruit/GetAllRecruitsList`
        }
    },
    contact:{
        getMessage(id){
            return `${adminUrl}/Message/GetMessage?Id=${id}`
        },
        getMessageList(startDateTime,endDateTime,ContactsPerson,ContactsTelephone,PageSize,CurPage){
            return `${adminUrl}/Message/GetMessageList?startDateTime=${startDateTime}&endDateTime=${endDateTime}&ContactsPerson=${ContactsPerson}&ContactsTelephone=${ContactsTelephone}&PageSize=${PageSize}&CurPage=${CurPage}`
        },
        delMessage(id){
            return `${adminUrl}/Message/DelMessage?Id=${id}`
        },
        addMessage(){
            return `${adminUrl}/Message/AddMessage`
        },
        getUnCount(){
            return `${adminUrl}/Message/GetUnMessageCount`
            
        }
    },
    setting:{
        login(){
            return `${adminUrl}/User/Login`
        },
        editpassWord(UserName,UserPwd,NewPwd){
            return `${adminUrl}/User/EditpassWord?UserName=${UserName}&UserPwd=${UserPwd}&NewPwd=${NewPwd}`
        }
    }
}

export default adminRoutes;