import { QueryIsSuccess } from "@/app/context/queries/QueryIsSuccess"
import { QueryProvider } from "@/app/context/queries/QueryProvider"
import { useGetAdminReport } from "../../../app/CRUD/reports/getAdminReport";
import { useParams } from "react-router-dom"
import CommentList from "../components/CommentList";
import ReportActions from "../components/ReportActions";
import ReportInfo from "../components/ReportInfo";
import AdminFeedback from "../components/AdminFeedbackForm";

const ViewReport = () => {
  const {reportId} = useParams();
  const reportData = useGetAdminReport(reportId);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-6 items-start">
      <QueryProvider {...reportData}>
        <QueryIsSuccess>
          <div className="flex flex-col gap-6 grow">
            <ReportInfo/>
            <CommentList/>
          </div>
          <div className="flex flex-col md:w-3/12 gap-6">
            <ReportActions/>
            <AdminFeedback/>
          </div>
        </QueryIsSuccess>
      </QueryProvider>
    </div>
  )
}

export default ViewReport