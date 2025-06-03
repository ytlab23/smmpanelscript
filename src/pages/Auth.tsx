import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Auth = () => {
  // For demo, just local state for form fields
  const [signup, setSignup] = useState({ email: "", password: "", confirm: "" });
  const [login, setLogin] = useState({ email: "", password: "" });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-fuchsia-50 via-indigo-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="w-full max-w-md bg-white/90 dark:bg-slate-900/90 rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
          Welcome to smmpanelscript.org
        </h1>
        <Tabs defaultValue="signup" className="w-full">
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
            <TabsTrigger value="login">Log In</TabsTrigger>
          </TabsList>
          <TabsContent value="signup">
            <form className="space-y-4">
              <Input
                type="email"
                placeholder="Email"
                required
                value={signup.email}
                onChange={e => setSignup(s => ({ ...s, email: e.target.value }))}
              />
              <Input
                type="password"
                placeholder="Password"
                required
                value={signup.password}
                onChange={e => setSignup(s => ({ ...s, password: e.target.value }))}
              />
              <Input
                type="password"
                placeholder="Confirm Password"
                required
                value={signup.confirm}
                onChange={e => setSignup(s => ({ ...s, confirm: e.target.value }))}
              />
              <Button type="submit" className="w-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white font-semibold">
                Sign Up
              </Button>
            </form>
          </TabsContent>
          <TabsContent value="login">
            <form className="space-y-4">
              <Input
                type="email"
                placeholder="Email"
                required
                value={login.email}
                onChange={e => setLogin(s => ({ ...s, email: e.target.value }))}
              />
              <Input
                type="password"
                placeholder="Password"
                required
                value={login.password}
                onChange={e => setLogin(s => ({ ...s, password: e.target.value }))}
              />
              <Button type="submit" className="w-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white font-semibold">
                Log In
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Auth;