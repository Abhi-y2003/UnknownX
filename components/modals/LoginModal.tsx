import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";
import Input from "../layout/Input";
import Modal from "../Modal";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setLoading(true);

      loginModal.onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [loginModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={loading}
      />
      <Input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={loading}
      />
    </div>
  );
  return <Modal disabled={loading} isOpen={loginModal.isopen} title="Login" actionLabel="Sign in" onClose={loginModal.onClose}
  onSubmit={onSubmit} body={bodyContent} />;
};

export default LoginModal;
