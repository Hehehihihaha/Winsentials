use std::process::Command;

use crate::error::AppError;

pub fn run_powershell(script: &str) -> Result<String, AppError> {
    let output = Command::new("powershell")
        .args(["-NoProfile", "-NonInteractive", "-Command", script])
        .output()?;

    if output.status.success() {
        return String::from_utf8(output.stdout).map_err(AppError::from);
    }

    Err(AppError::CommandFailed {
        command: "powershell".to_string(),
        stderr: String::from_utf8_lossy(&output.stderr).trim().to_string(),
    })
}

pub fn restart_explorer() -> Result<(), AppError> {
    run_powershell(
        "Stop-Process -Name explorer -Force -ErrorAction SilentlyContinue; Start-Process explorer.exe",
    )?;

    Ok(())
}
