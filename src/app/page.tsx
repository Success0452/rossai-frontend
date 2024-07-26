import {AuthCustomHeader} from "src/app/components/auth-header";
import {Landing} from "src/app/landing";

export default function Home() {
  return (
      <AuthCustomHeader>
          <Landing />
      </AuthCustomHeader>
  );
}
